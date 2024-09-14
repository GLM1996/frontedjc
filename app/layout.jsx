import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/globals.css'
import { Suspense } from "react";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavbarComponent />
                </Suspense>

                {children}
                <Suspense fallback={<div>Loading...</div>}>
                    <FooterComponent />
                </Suspense>
            </body>
        </html>
    )
}