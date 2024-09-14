import BannerComponent from '../../components/BannerComponent';
import Link from 'next/link'
import '../styles/About.css'
import Image from 'next/image';

export default function About() {
    return (
        <>
            <BannerComponent
                title="JUAN CARLOS CARRERA"
                subtitle="Who We Are"
                backgroundImage="https://www.homelasvegasnevada.com/wp-content/uploads/2022/01/Las-Vegas.jpg"
            />
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="m-1 p-5">
                        <h3 className="meet">MEET</h3>

                        <h4>Juan Carlos Carrera</h4>
                        <h5 className="realtor">Realtor®</h5>

                        <p className='paragraph'>Juan Carlos Carrera works as a Realtor helping people Buy & Sell Homes in Las Vegas.
                            We have been nominated as the Top 1% Real Estate Agent in Las Vegas Nevada since 2018. Juan Carlos
                            Carrera
                            has a degree as an Engineer and Business Administration. We help Buyers with Down Payment Assistance
                            programs for First Time Home Buyers. We speak English and Spanish.
                        </p>
                        <Link href="/contact" className="fs-5 border-2 btn  me-1 px-5 mt-2 btn-contact">LET IS CONNECT
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className=" bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6">

                    <div className="m-1 p-2 d-flex flex-column justify-content-center align-items-center">
                        <Image
                            src="https://www.homelasvegasnevada.com/wp-content/uploads/2022/01/Juan-JPG-715x1024.jpg"
                            alt="Juan Carlos Carrera"
                            width={400}
                            height={800}
                            layout="intrinsic"
                        />
                    </div>
                    <div className="position-relative border bg-dark w-50 text-center p-1 rounded-2 contact m-auto">
                        <a href="tel:702-745-2873" className="btn text-white">
                            <span><i className="bi bi-telephone-outbound-fill"></i></span> 702-745-2873
                        </a>


                        <a href="mailto:homelasvegasnevada@gmail.com" className="btn text-white">
                            <span><i className="bi bi-envelope-arrow-up-fill"></i></span>homelasvegasnevada@gmail.com
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}