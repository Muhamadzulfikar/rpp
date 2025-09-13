import 'dotenv/config'
import {RegisterForm} from "~/components/register-form"

export default function RegisterPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex size-6 items-center justify-center rounded-md">
                            <image src="/school.svg"/>
                        </div>
                        {process.env.APP_NAME}
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
            </div>
        </div>
    )
}
