
const ContentTitle = ({title='title', subTitle='subTitle', description="description"}) => {
    return (
        <div className="text-center my-10">
            <h4 className="text-[#FF3811] text-xl font-semibold">{title}</h4>
            <h1 className="text-4xl font-bold">{subTitle}</h1>
            <p className="w-1/2 mx-auto text-[#737373] text-sm">{description}</p>
        </div>
    );
};

export default ContentTitle;