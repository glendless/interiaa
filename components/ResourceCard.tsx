import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    title: string;
    image: string;
    downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadLink }: Props) => {
    return (
        <Card className="w-full max-w-fit border-0 bg-white sm:max-w-[356px] rounded-lg">
            <Link href={downloadLink} target="_blank">
                <CardHeader className="flex-center flex-col gap-2.5 p-1.5">
                    <div className="h-fit w-full">
                        <Image src={image}
                            alt={title} width={384} height={440}
                            className="h-full object-cover rounded"
                        />
                    </div>
                    <CardTitle className="text-left text-primary paragraph-semibold line-clamp-1 w-full px-2">{title}</CardTitle>
                </CardHeader>
            </Link >
            <CardContent className="flex-between p-1.5 text-primary shadow-none">
                <div className="flex-center body-medium gap-1.5 px-2 pb-2">
                    <p className="text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in.
                    </p>
                    {/* <Image
                        src="/downloads.svg"
                        width={20} height={20}
                        alt="download"
                    /> */}
                </div>
                {/* <Link href={downloadLink} target="_blank"
                    className="flex-center gap-1.5 body-semibold p2">
                    Check Now
                    <Image
                        src="/arrow-blue.svg" alt="arrow"
                        width={13} height={10} />
                </Link> */}
            </CardContent>
        </Card>
    );
};

export default ResourceCard;