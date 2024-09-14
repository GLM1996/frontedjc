import NavbarComponent from "../components/NavbarComponent"
import FooterComponent from "../components/FooterComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <NavbarComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    )
}