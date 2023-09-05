
const Title = ({title, subTitle}) => {
    return (
        <div className="w-1/3 pb-10 mx-auto text-center pt-14">
            <p className="pb-1 text-sm capitalize text-rose-500">----{subTitle}----</p>
            <h1 className="py-3 text-4xl font-semibold uppercase border-y-2 border-b-rose-500">{title}</h1>
        </div>
    );
};

export default Title;