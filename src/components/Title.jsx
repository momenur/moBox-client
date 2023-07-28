
const Title = ({title, subTitle}) => {
    return (
        <div className="w-1/3 mx-auto text-center pt-14 pb-10">
            <p className="text-sm text-rose-500 capitalize pb-1">----{subTitle}----</p>
            <h1 className="uppercase text-4xl font-semibold border-y-2 border-y-rose-500 py-3">{title}</h1>
        </div>
    );
};

export default Title;