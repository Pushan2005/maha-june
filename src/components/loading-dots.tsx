export default function LoadingDots() {
    return (
        <>
            <div className="flex space-x-2 justify-center items-center bg-black h-screen dark:invert">
                <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
            </div>
        </>
    );
}
