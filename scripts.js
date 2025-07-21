// 🔁 Initialize AOS Animations
AOS.init({
  duration: 800,
  offset: 100,
  once: true
});

// 🔎 Local Vote Tracking System
const votes = { yes: 0, maybe: 0, no: 0 };

function handlePoll(event) {
  event.preventDefault();

  const form = document.getElementById('voteForm');
  const voteChoice = form.vote.value;
  const matric = form.matric.value.trim();
  const dept = form.department.value.trim();
  const level = form.level.value.trim();

  // Count the vote
  if (votes.hasOwnProperty(voteChoice)) {
    votes[voteChoice]++;
  }

  // Calculate percentages
  const totalVotes = votes.yes + votes.maybe + votes.no;
  const yesPercent = ((votes.yes / totalVotes) * 100).toFixed(1);
  const maybePercent = ((votes.maybe / totalVotes) * 100).toFixed(1);
  const noPercent = ((votes.no / totalVotes) * 100).toFixed(1);

  // Display confirmation + live stats
  document.getElementById('pollResult').innerHTML = `
    ✅ Thank you, ${matric} (${level}, ${dept})<br><br>
    📊 <strong>Live Poll Stats:</strong><br>
    👍 Yes: ${yesPercent}%<br>
    🤔 Maybe: ${maybePercent}%<br>
    ❌ No: ${noPercent}%
  `;

  form.reset();
}
