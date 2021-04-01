import React from "react";

export default function Suspense({
  children,
  errorFallback,
  loadingFallback,
  error,
  loading
}) {
  if (error) {
    return errorFallback;
  }
  if (loading) {
    return loadingFallback;
  }
  return children;
}
