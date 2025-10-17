import { cn } from "@/lib/utils";

interface TabsProps {
  defaultValues?: string;
  types: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ types, activeTab, onTabChange }: TabsProps) {
  return (
    <ul className="flex gap-4 mb-10">
      {types.map((type) => (
        <TabItem
          key={type}
          type={type}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      ))}
    </ul>
  );
}

function TabItem({
  type,
  activeTab,
  onTabChange,
}: {
  type: string;
  defaultValues?: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const isActive = activeTab === type;
  return (
    <li
      key={type}
      className={cn(
        "cursor-pointer",
        !isActive && "hover:text-blue-500 hover:-translate-y-1 transition",
        isActive && "font-bold text-blue-500"
      )}
      onClick={() => onTabChange(type)}
    >
      {type}
    </li>
  );
}
