

export const metadata = {
    title: "Dashboard",
    description: "Dashboard",
};

export default function Dashboard() {
    return (
        <div className="min-h-[60vh]  flex flex-col items-center justify-center">
            <h1 className="text-5xl text-primary-red font-bold mb-8 animate-pulse">
                Coming Soon
            </h1>
            <p className="text-black text-lg mb-8">
                We're working hard to bring you something amazing. Stay tuned!
            </p>
        </div>
    );
}