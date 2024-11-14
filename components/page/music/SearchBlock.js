"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SearchIcon} from "lucide-react";
import {useState} from "react";

const SearchBlock = ({onSearch, defaultValue = ""}) => {
    const [value, setValue] = useState(defaultValue);

    const handleSearch = () => {
        if (onSearch) onSearch(value)
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className="relative flex w-full max-w-sm items-center">
            <Input value={value} onKeyUp={handleKeyUp} onChange={event => setValue(event.target.value)}
                   autoComplete={'off'}
                   className={'pl-11 rounded-full bg-gray-100 focus-visible:bg-white'}
                   placeholder="搜索音乐"/>
            <Button onClick={handleSearch} className={'absolute left-1'} size={'icon'} variant={'link'}>
                <SearchIcon/>
            </Button>
        </div>
    );
};

export default SearchBlock;
