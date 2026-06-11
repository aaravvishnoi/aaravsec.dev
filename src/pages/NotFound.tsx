import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();
  usePageMeta({ title: "404 — Not found", description: "This page could not be found." });

  return (
    <Layout>
      <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-start justify-center px-6">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-5xl font-semibold tracking-tight">Not found</h1>
        <p className="mt-4 font-mono text-sm text-muted-foreground">{location.pathname}</p>
        <Link to="/" className="mt-8 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
          Return home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
