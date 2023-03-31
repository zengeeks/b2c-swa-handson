export default function Vote() {
  async function submit() {
    const response = await fetch("/api/auth/votes", {
      method: "POST",
    });
    if (response.ok) {
      alert("投票が送信されました！");
    }
  }

  return <button onClick={submit}>投票する</button>;
}
