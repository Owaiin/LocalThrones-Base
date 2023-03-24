type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="container mx-auto px-3">{children}</div>
    </>
  );
}
