import Image from "next/image";
import fullLogo from '@/public/assets/icons/logo-full.svg';
import registerImg from '@/public/assets/images/register-img.png';
import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";
import { getUser } from "@/lib/actions/patient.actions";


const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src={fullLogo}
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <RegisterForm user={user} />
                    <div className="text-14-regular mt-16 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            ©️ 2024 CarePulse
                        </p>
                        <Link href="/?admin=true" className="text-green-500">
                            Admin
                        </Link>
                    </div>
                </div>
            </section>
            <Image
                src={registerImg}
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[390px]"
            />
        </div>

    );
}

export default Register