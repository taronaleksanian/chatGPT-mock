import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import Button from "./Button";
import { PromptForm } from "../models";

interface PromptProps {
  onSubmit: SubmitHandler<PromptForm>;
}

const schema = object({
  message: string().required().max(200),
}).required();

const Prompt: FC<PromptProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PromptForm>({ resolver: yupResolver(schema) });

  const onPrompt: SubmitHandler<PromptForm> = (data) => {
    reset({ message: "" });
    onSubmit(data);
  };

  const hasError = !!errors.message?.message;

  return (
    <form
      onSubmit={handleSubmit(onPrompt)}
      className={`flex justify-between w-full border border-border rounded p-1 pr-3 mb-4 relative ${
        hasError ? "border-danger-500" : ""
      }`}
    >
      <div className="flex-1">
        <input
          className="w-full border-none focus:border-none focus:outline-none font-semibold text-neutral h-full"
          autoComplete="none"
          placeholder="Send a message"
          {...register("message")}
        />
        <span className="text-danger text-sm text-danger-500 absolute bottom-[-18px] left-0">
          {errors.message?.message}
        </span>
      </div>
      <Button type="submit" className="bg-primary ml-2">
        Send
      </Button>
    </form>
  );
};

export default Prompt;
