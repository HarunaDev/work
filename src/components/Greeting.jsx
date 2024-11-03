function Greeting({text}) {
    const getTimeOfDayGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) return 'Good morning';
        if (currentHour < 18) return 'Good afternoon';
        return 'Good evening';
      };
    return (
    <div>
            <h2 className="text-2xl font-extrabold text-db-dark-heading mb-4">{getTimeOfDayGreeting()}, Jake</h2>
            <p className="text-gray-600">
            {text}
            </p>
        </div>
    )
}

export default Greeting