import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import useConfig from "@/lib/hook/useConfig";

const SideTop = () => {
    const config = useConfig()

    return (
        <Link className={'my-2 py-2 flex items-center'} href={'/'}>
            <Avatar className={'w-9 h-9'}>
                <AvatarImage src={config.author.avatar} alt={config.author.name}/>
                <AvatarFallback>{config.author.name}</AvatarFallback>
            </Avatar>
            <div className={'ml-2 text-lg'}>{config.author.name}</div>
        </Link>
    );
};

export default SideTop;
