type AnimationPreviewPropsType = {
  templateId: string;
  fontStyle: string;
  colorTheme: string;
};

type ColorTheme = "red" | "purple" | "yellow" | "blue";

const colorThemeMap: Record<ColorTheme, string> = {
  red: "bg-red-100",
  purple: "bg-purple-100",
  yellow: "bg-yellow-100",
  blue: "bg-blue-100",
};

function AnimationPreview({
  templateId,
  fontStyle,
  colorTheme,
}: AnimationPreviewPropsType) {
  const bgColor = colorThemeMap[colorTheme] || "bg-gray-100";

  return (
    <main
      className={`flex-1 overflow-hidden ${bgColor} flex items-center justify-center`}
    >
      <div className="text-center text-gray-600">
        <p className="text-lg mb-2">Card Preview Area</p>
        <p className="text-sm">Template ID: {templateId}</p>
        <p className="text-sm mt-4">
          Selected: {fontStyle} style, {colorTheme} theme
        </p>
      </div>
    </main>
  );
}

export default AnimationPreview;
