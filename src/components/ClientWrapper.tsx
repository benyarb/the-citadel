import { useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  [key: string]: any;
}

export default function ClientWrapper({ children, ...delegated }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
