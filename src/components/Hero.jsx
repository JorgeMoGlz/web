import { Section } from "./Section";
import { CTAButton } from "./CTAButton";

export const Hero = () => {
    return (
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto 
                text-center mb-[3.875rem] md:mb-20 lg:mb-[6.26rem]">
                <h1 className="h1 mb-6">
                    Servicios en <span className="inline-block relative">
                        seguridad radiológica
                    </span>
                </h1>
                <p className="body-1 mb-3">
                    Ofrecemos servicio a más de 200 empresas en México
                    que trabajan con radiación ionizante.
                </p>
                <CTAButton text="Habla con un asesor"/>
            </div>
        </div>
    )
}
