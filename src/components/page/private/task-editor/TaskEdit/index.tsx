import { Button, Checkbox, Group, MultiSelect, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { editTaskData, myTaskList } from "~/libs/recoil/atom/taskEditor";

const TaskEdit = () => {
  const editTaskInfo = useRecoilValue(editTaskData);
  const _setIsDoneTaskInfo = useSetRecoilState(myTaskList);

  const handleForm = useForm({
    initialValues: {
      name: "",
      description: "",
      outputMemo: "",
      isDone: false,
      labelId: "",
    },
  });

  useEffect(() => {
    handleForm.setValues({
      name: editTaskInfo?.name ?? "",
      description: editTaskInfo?.description ?? "",
      outputMemo: editTaskInfo?.outputMemo ?? "",
      isDone: editTaskInfo?.isDone ?? false,
      labelId: editTaskInfo?.labelId ?? "",
    });
  }, []);

  const handleSubmit = (values: typeof handleForm.values) => {
    console.info(values);
  };

  return (
    <form onSubmit={handleForm.onSubmit(handleSubmit)}>
      <div className="flex flex-col gap-2">
        <TextInput label="タスク名" required {...handleForm.getInputProps("name")} />

        <TextInput label="タスクの説明" {...handleForm.getInputProps("description")} />

        <Textarea
          label="アウトプットメモ"
          autosize
          minRows={10}
          maxRows={15}
          {...handleForm.getInputProps("outputMemo")}
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
