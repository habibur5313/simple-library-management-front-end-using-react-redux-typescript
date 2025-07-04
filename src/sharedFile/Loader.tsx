type LoaderProps = {
  size?: number;
  text?: string;
};

export const Loader = ({ size = 32, text }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-2">
      <div
        className="border-4 border-primary border-t-transparent rounded-full animate-spin"
        style={{ width: size, height: size }}
      />
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );
};
