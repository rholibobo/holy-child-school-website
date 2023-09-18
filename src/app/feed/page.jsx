function simulateNetworkError() {
    return new Promise((resolve, reject) => {
      // Simulate a network request that fails after a delay
      setTimeout(() => {
        reject(new Error("Simulated network error"));
      }, 2000); // You can adjust the delay as needed
    });
  }
  

export default function Feed() {
    const error = simulateNetworkError()
    return (
        <div>
            Enter{error}
        </div>
    );
}