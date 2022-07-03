import { Button, Checkbox, Group, MultiSelect, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { RichTextEditor } from "@mantine/rte";
import { useState } from "react";

const TaskEdit = () => {
  const [outputMemoValue, handleOutputMemoChange] = useState("");

  const handleForm = useForm({
    initialValues: {
      name: "",
      description: "",
      isDone: false,
      labelId: "",
    },
  });

  // useEffect(() => {
  //   handleForm.setValues({
  //     name: editTaskInfo?.name ?? "",
  //     description: editTaskInfo?.description ?? "",
  //     isDone: editTaskInfo?.isDone ?? false,
  //     labelId: editTaskInfo?.labelId ?? "",
  //   });
  // }, []);

  const handleSubmit = (values: typeof handleForm.values) => {
    console.info(values);
    console.info(outputMemoValue);
  };

  return (
    <form onSubmit={handleForm.onSubmit(handleSubmit)}>
      <div className="flex flex-col gap-2">
        <TextInput label="タスク名" required {...handleForm.getInputProps("name")} />

        <TextInput label="タスクの説明" {...handleForm.getInputProps("description")} />

        <label className="text-sm">アウトプットメモ</label>
        <RichTextEditor
          controls={[
            ["bold", "italic", "underline", "link", "image"],
            ["unorderedList", "h1", "h2", "h3"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
          value={outputMemoValue ?? ""}
          onChange={handleOutputMemoChange}
        />

        <MultiSelect data={["React", "Svelte"]} label="ラベル" {...handleForm.getInputProps("labelId")} />

        <Checkbox mt="md" label="完了する" {...handleForm.getInputProps("isDone", { type: "checkbox" })} />

        <Group position="right" mt="md">
          <Button type="submit">保存する</Button>
        </Group>
      </div>
    </form>
  );
};

export default TaskEdit;
