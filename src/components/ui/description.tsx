export default function Description({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-center gap-6">
      <div className="text-xs md:text-lg text-gray-500 font-semibold">
        {children}
      </div>
    </div>
  );
}
