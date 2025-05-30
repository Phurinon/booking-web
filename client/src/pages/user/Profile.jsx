import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, InputNumber } from "antd";
import Swal from "sweetalert2";
import createProfile from '@/functions/user/user'

function Profile() {
  const [form] = Form.useForm();
  const [phone, setPhone] = useState();

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
      await createProfile(data);
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

  // Check phone number
  const onChange = (val) => {
    // val อาจเป็น undefined หรือ number
    if (val === undefined) {
      setPhone("");
      return;
    }

    const strVal = val.toString().replace(/\D/g, "");
    if (strVal.length <= 10) {
      setPhone(val);
    }
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-bold px-8 my-4">
        กรอกข้อมูลของคุณ
      </h1>
      <div className="border p-8 m-8 rounded-md">
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Form.Item
              label="ชื่อ"
              name="firstName"
              rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
            >
              <Input placeholder="กรุณากรอกชื่อ" />
            </Form.Item>

            <Form.Item
              label="นามสกุล"
              name="lastName"
              rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
            >
              <Input placeholder="กรุณากรอกนามสกุล" />
            </Form.Item>

            <Form.Item
              label="เบอร์โทรศัพท์"
              name="phone"
              rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                value={phone}
                stringMode
                controls={false}
                parser={(val) => val.replace(/\D/g, "")}
                formatter={(val) => val}
                onChange={onChange}
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

                  // ถ้าเกิน 10 ตัว ไม่ให้พิมพ์
                  if (
                    phone.length >= 10 &&
                    !allowedKeys.includes(e.key) &&
                    window.getSelection().toString().length === 0
                  ) {
                    e.preventDefault();
                  }
                }}
                onPaste={(e) => {
                  const pasted = e.clipboardData
                    .getData("text")
                    .replace(/\D/g, "");
                  if (pasted.length > 10) {
                    e.preventDefault();
                  }
                }}
              />
            </Form.Item>

            <Form.Item
              label="อีเมล"
              name="email"
              rules={[{ required: true, message: "กรุณากรอกอีเมล" }]}
            >
              <Input placeholder="กรุณากรอกอีเมล" />
            </Form.Item>

          </div>
          <Form.Item className="mt-4">
            <Button type="primary" htmlType="submit" loading={false}>
              บันทึกข้อมูล
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}

export default Profile;
