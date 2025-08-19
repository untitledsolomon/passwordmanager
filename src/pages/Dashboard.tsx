export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your app! Build your content here.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="p-4 bg-white rounded-lg shadow">Card 1</div>
                <div className="p-4 bg-white rounded-lg shadow">Card 2</div>
                <div className="p-4 bg-white rounded-lg shadow">Card 3</div>
            </div>
        </div>
    )
}