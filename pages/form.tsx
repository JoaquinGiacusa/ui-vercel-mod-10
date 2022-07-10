import { useForm } from "react-hook-form";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitHandler(data: any) {
    console.log("datita", data);
  }

  const name = watch("nombre");
  if (name?.length > 3) {
    console.log("tiene muchas letras");
  }
  // useEffect(() => {
  //   if (name.length > 3) {
  //     console.log("tiene muchas letras");
  //   }
  // }, [name]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <label>
        <h4>Nombre</h4>
        <input type="text" {...register("nombre")} />
      </label>
      <label>
        <h4>Apellido</h4>
        <input type="text" {...register("apellido", { required: true })} />
        {errors.apellido && <span>El apellido es requerido</span>}
      </label>
      <label>
        <h4>Direccion</h4>
        <input type="text" {...register("direccion")} />
      </label>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
}
