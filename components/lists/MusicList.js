'use client'

const MusicItem = ()=> {
    return (
        <div>

        </div>
    )
}

const MusicList = () => {
    return (
        <div>
            {Array(5).fill(0).map((_, i) => (
                <MusicItem key={i}/>
            ))}
        </div>
    );
};

export default MusicList;
