import { Aside, Tabs } from "@mantine/core";
import { lazy } from "react";
import { useRecoilState } from "recoil";
import { List, Pencil, Tag } from "tabler-icons-react";

import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";
import { taskEditorTabIndex } from "~/libs/recoil/atom/taskEditor";

const TaskList = lazy(() => import("~/components/page/private/task-editor/TaskList"));
const TaskEdit = lazy(() => import("~/components/page/private/task-editor/TaskEdit"));
const LabelList = lazy(() => import("~/components/page/private/task-editor/LabelList"));

export const SideEditor = () => {
  const [activeTabIndex, handleSetActiveTabIndex] = useRecoilState(taskEditorTabIndex);

  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 300, md: 400, lg: 500 }}>
      <Tabs active={activeTabIndex} onTabChange={handleSetActiveTabIndex} grow>
        <Tabs.Tab label="タスク一覧" icon={<List size={14} />}>
          <ErrorBoundary>
            <Suspense>
              <TaskList />
            </Suspense>
          </ErrorBoundary>
        </Tabs.Tab>
        <Tabs.Tab label="タスク編集" icon={<Pencil size={14} />}>
          <ErrorBoundary>
            <Suspense>
              <TaskEdit />
            </Suspense>
          </ErrorBoundary>
        </Tabs.Tab>
        <Tabs.Tab label="ラベル一覧" icon={<Tag size={14} />}>
          <ErrorBoundary>
            <Suspense>
              <LabelList />
            </Suspense>
          </ErrorBoundary>
        </Tabs.Tab>
      </Tabs>
    </Aside>
  );
};
