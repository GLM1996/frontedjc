// app/404/page.js
"use client";
import { Suspense } from "react";

export default function NotFoundPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            
        </Suspense>
    );
}
