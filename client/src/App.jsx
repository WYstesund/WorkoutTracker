// Top-level component for the WorkoutTracker app.
//
// MVP scope: a single home screen with the app title and nothing else.
// Once we start building real screens, this file will hold the `view` state
// variable (e.g. 'home' | 'session' | 'complete' | 'builder') and render
// each screen via if/else. We are not using a router library — see CLAUDE.md.

export default function App() {
  return (
    // .screen is the mobile-first centered container defined in index.css.
    // It caps width at 480px so the layout reads naturally on iPhone.
    <div className="screen">
      {/* Home screen header. The full home page (workout list, "New Workout"
          button) will land below this title in a later iteration. */}
      <header className="home-header">
        <h1 className="app-title">Ystesund Fitness</h1>
      </header>
    </div>
  )
}
