import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import CategoryInput from "@/components/form/CategoryInput"; // สมมติว่ายังใช้ของเดิม
import Mainmap from "@/components/map/Mainmap";
import { Select } from "antd";
import { categories } from "@/utils/categories";
import Swal from 'sweetalert2';


const { TextArea } = Input;

function Place() {
  const [form] = Form.useForm();

  const onSubmit = async (data) => {
    Swal.fire({
      title: "กำลังบันทึกข้อมูล...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); // แสดง spinner
      },
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // mock API
      console.log(data);

      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ!",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: error.message || "ไม่สามารถบันทึกข้อมูลได้",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("❌ Failed:", errorInfo);
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-bold px-8 my-4">
        เพิ่มสถานที่ใหม่
      </h1>
      <div className="border p-8 m-8 rounded-md">
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Form.Item
              label="ชื่อสถานที่"
              name="title"
              rules={[{ required: true, message: "กรุณากรอกชื่อสถานที่" }]}
            >
              <Input placeholder="Title of the place..." />
            </Form.Item>

            <Form.Item
              label="ราคา"
              name="price"
              rules={[{ required: true, message: "กรุณากรอกราคา" }]}
            >
              <InputNumber
                placeholder="Price of the place..."
                style={{ width: "100%" }}
                min={0}
                step={1}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/[^0-9]/g, "")}
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                  ];
                  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                onPaste={(e) => {
                  const pasted = e.clipboardData.getData("text");
                  if (!/^\d+$/.test(pasted)) {
                    e.preventDefault();
                  }
                }}
              />
            </Form.Item>

            <Form.Item
              label="ที่อยู่"
              name="address"
              rules={[{ required: true, message: "กรุณากรอกที่อยู่" }]}
            >
              <TextArea rows={3} placeholder="Address of the place..." />
            </Form.Item>

            <Form.Item
              label="ประเภทสถานที่"
              name="category"
              rules={[{ required: true, message: "กรุณาเลือกประเภทสถานที่" }]}
            >
              <Select placeholder="เลือกประเภท">
                {categories.map((item) => (
                  <Select.Option key={item.label} value={item.label}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="รายละเอียด"
              name="description"
              rules={[{ required: true, message: "กรุณากรอกรายละเอียด" }]}
              className="md:col-span-2"
            >
              <TextArea rows={4} placeholder="Description of the place..." />
            </Form.Item>
          </div>

          {/* map component ควรส่งค่าให้ form ผ่าน `form.setFieldsValue()` */}
          <div className="mb-8">
            <Mainmap form={form} />
          </div>

          <Form.Item className="mt-4">
            <Button type="primary" htmlType="submit" loading={false}>
              เพิ่มสถานที่
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default Place;
