const MainColumn = ({children}) => {
    return (
        <div className={'w-[650px] border-r flex flex-col'}>
            <div className={'flex flex-col flex-grow'}>
                {children}
            </div>
        </div>
    );
};

export default MainColumn;
