import { Spinner } from "@nextui-org/react";

export default function App() {
    return (
        <div className="grid items-center">
            <Spinner size='lg' color=" danger" />
            <h2 className="text-slate-400">Loading...</h2>
        </div>
    );
}
