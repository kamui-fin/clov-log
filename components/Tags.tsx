interface Props {
    tags: string[];
    selectedTags: string[];
    setTags: (newTags: string[]) => void;
}

const Tags: React.FC<Props> = ({ tags, selectedTags, setTags }: Props) => {
    const toggleTag: React.MouseEventHandler<HTMLButtonElement> = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const tagName = (event.target as HTMLButtonElement).textContent;
        if (!tagName) return;
        if (selectedTags.find((t) => t === tagName)) {
            setTags(selectedTags.filter((t) => t !== tagName));
        } else {
            setTags([...selectedTags, tagName]);
        }
    };

    return (
        <div className="mt-7 flex flex-wrap gap-3">
            {tags.map((tag) => {
                const isEnabled = selectedTags.find((t) => t === tag);
                return (
                    <button
                        className={`text-sky-50 rounded cursor-pointer py-1 px-2 font-normal ${
                            isEnabled ? "bg-blueGray-200" : "bg-blueGray-500"
                        }`}
                        type="button"
                        onClick={toggleTag}
                    >
                        {tag}
                    </button>
                );
            })}
        </div>
    );
};

export default Tags;
