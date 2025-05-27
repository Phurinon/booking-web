import FormInputs from "@/components/form/FormInputs";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextAreaInput from "@/components/form/TextAreaInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { placeSchema } from "@/utils/schemas";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap";

function Place() {
  const { register, handleSubmit, formState, setValue } = useForm({resolver: zodResolver(placeSchema)});
  const { errors, isSubmitting } = formState

  useEffect(() => {
    // console.log("isSubmitting:", isSubmitting);
  }, [isSubmitting]);

  const Submit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a network request
    console.log(data)
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-bold px-8 mb-4">create your place</h1>
      <div className="border p-8 m-8 rounded-md ">
        <form onSubmit={handleSubmit(Submit)}>
          <div className="grid md:grid-cols-2 gap-4 break-words">
            <FormInputs 
            register={register} 
            name='title' 
            type='text'
            placeholder='Title of the place...'/>
            {errors.title && <p className="text-red-500 text-xs ">{errors.title.message}</p>}
            
            <FormInputs 
            register={register} 
            name='price' 
            type='number'
            placeholder='Price of the place...'
            valueAsNumber={true}/>
            {errors.price && <p className="text-red-500 text-xs ">{errors.price.message}</p>}

            <TextAreaInput 
            register={register} 
            name='address' 
            type='text'
            placeholder='Address of the place...'/>
            {errors.address && <p className="text-red-500 text-xs ">{errors.address.message}</p>}

            <CategoryInput 
            name='category'
            register={register}
            setValue={setValue}
            />
            
            <TextAreaInput 
            register={register} 
            name='description' 
            type='text'
            placeholder='Description of the place...'/>
            {errors.description && <p className="text-red-500 text-xs  md:col-span-2">{errors.description.message}</p>}
            

          </div>

          <Mainmap
          register={register}
          setValue={setValue}
          />


            <Buttons 
            text='create place' 
            isPending={isSubmitting}/>
        </form>
      </div>
    </section>
  );
}

export default Place;
