import Banner from '../../components/BannerComponent';
import { Suspense } from "react";

export default function Contact() {
    return (
        <>
            <Suspense>
                <Banner
                    title="JUAN CARLOS CARRERA"
                    subtitle="Got a question? Let us know how we can help you."
                    backgroundImage="/img/jclasvegasback.png"
                />
            </Suspense>
            <h1>About</h1>
        </>
    )
}