import { useState } from "react";

const weeks = [
  {
    week: 1,
    title: "Angular Foundations & Mental Model",
    theme: "Understand how Angular thinks",
    hours: "10–12 hrs",
    color: "#C8F96B",
    topics: [
      {
        name: "Angular CLI & Project Structure",
        detail: "ng new, folder anatomy (app/, environments/, assets/), angular.json, what each generated file does and why.",
      },
      {
        name: "Modules (NgModule) — the old glue",
        detail: "What NgModule is, declarations vs imports vs providers vs bootstrap. Even though standalone is the future, you'll encounter NgModule in every existing codebase.",
      },
      {
        name: "Standalone Components (Angular 17+)",
        detail: "The modern default. How standalone:true removes the need for NgModule for most things. Know both — prefer standalone for new code.",
      },
      {
        name: "Components — the core building block",
        detail: "@Component decorator, selector, template, styles. Component lifecycle overview (ngOnInit, ngOnDestroy are the two you'll use 80% of the time).",
      },
      {
        name: "Template Syntax essentials",
        detail: "Interpolation {{ }}, property binding [prop], event binding (event), two-way binding [(ngModel)]. These four cover almost everything.",
      },
      {
        name: "TypeScript in Angular context",
        detail: "Interfaces for models, type-safe @Input/@Output, strict mode basics. Since you have theoretical TS knowledge, focus on Angular-specific patterns.",
      },
    ],
    exercise: "Build a simple Profile Card component with @Input() props for name, role, and avatar. Display it three times in AppComponent with different data.",
    keyInsight: "Angular is opinionated by design. Stop fighting its structure — learn to leverage it. The CLI is your best friend.",
  },
  {
    week: 2,
    title: "Component Communication & Directives",
    theme: "Make components talk to each other",
    hours: "10–12 hrs",
    color: "#6BF9C8",
    topics: [
      {
        name: "@Input() & @Output()",
        detail: "Parent → Child with @Input(). Child → Parent with @Output() and EventEmitter. This is 90% of component communication you'll do daily.",
      },
      {
        name: "Built-in Control Flow (Angular 17+)",
        detail: "@if, @for, @switch in templates. These replaced *ngIf and *ngFor. Learn the new syntax — it's cleaner and performs better.",
      },
      {
        name: "Built-in Directives",
        detail: "ngClass, ngStyle for dynamic styling. The structural directives *ngIf and *ngFor (legacy) — you'll still encounter them in older code.",
      },
      {
        name: "Content Projection (ng-content)",
        detail: "How to make wrapper/layout components that accept arbitrary content. The Angular equivalent of React's children prop.",
      },
      {
        name: "ViewChild & ElementRef",
        detail: "Accessing child components or DOM elements programmatically. When to use it and when NOT to (prefer data-driven approaches).",
      },
    ],
    exercise: "Build a reusable Card List component. Parent passes an array of items via @Input(). Each card has a Delete button that emits the item id via @Output(). Parent removes it from the array.",
    keyInsight: "@Input/@Output is the data flow backbone. Master unidirectional data flow first — it prevents 80% of state bugs.",
  },
  {
    week: 3,
    title: "Services, DI & State",
    theme: "Centralize logic, share data",
    hours: "10–12 hrs",
    color: "#6BC8F9",
    topics: [
      {
        name: "Services & @Injectable()",
        detail: "What a service is, why it exists, how to generate one with CLI. The Single Responsibility Principle in Angular — components display, services do logic.",
      },
      {
        name: "Dependency Injection (DI)",
        detail: "How Angular's DI system works. providedIn: 'root' vs component-level providers. Understanding the injector hierarchy is crucial for debugging.",
      },
      {
        name: "Signals (Angular 17+) — the modern state",
        detail: "signal(), computed(), effect(). This is Angular's answer to reactive state management. Far simpler than RxJS for most use cases. Learn this deeply.",
      },
      {
        name: "RxJS Fundamentals (just enough)",
        detail: "Observable, Subject, BehaviorSubject. The pipe() operator, switchMap, map, tap, takeUntilDestroyed. You need a working understanding, not mastery.",
      },
      {
        name: "HttpClient & API calls",
        detail: "Injecting HttpClient, making GET/POST/PUT/DELETE calls, handling errors with catchError. Setting up provideHttpClient() in app.config.ts.",
      },
    ],
    exercise: "Build a Todo Service with signal-based state (todos array as a signal). Add methods: addTodo(), removeTodo(), toggleComplete(). Inject it into two separate components — one shows the list, one shows the count. Watch them stay in sync.",
    keyInsight: "Signals are the future of Angular reactivity. Invest time here — they're simple, powerful, and reduce RxJS complexity by 60%.",
  },
  {
    week: 4,
    title: "Routing & Navigation",
    theme: "Build multi-page applications",
    hours: "10–12 hrs",
    color: "#F96BC8",
    topics: [
      {
        name: "Angular Router setup",
        detail: "provideRouter() in app.config.ts, <router-outlet>, defining route configurations. Lazy loading with loadComponent() for standalone components.",
      },
      {
        name: "Route Parameters & Query Params",
        detail: "Dynamic routes (/product/:id), reading params with ActivatedRoute or the new inject(ActivatedRoute) pattern. Query params for filters/pagination.",
      },
      {
        name: "Programmatic Navigation",
        detail: "Router.navigate() and Router.navigateByUrl(). When to use routerLink vs programmatic navigation.",
      },
      {
        name: "Route Guards",
        detail: "canActivate for auth protection. canDeactivate for unsaved changes warnings. The functional guard pattern (Angular 15+) is cleaner than class-based.",
      },
      {
        name: "Nested Routes & Layout Components",
        detail: "Child routes, multiple router-outlets, creating shell layout components (header + sidebar + content). This is how real apps are structured.",
      },
    ],
    exercise: "Build a 3-page app: Home, Products list, Product detail (/products/:id). Add a fake auth guard that redirects to Home if a 'loggedIn' signal in AuthService is false. Add a login button that sets it to true.",
    keyInsight: "Lazy loading is non-negotiable in production. Every feature module/route should be lazy loaded — it directly impacts initial load performance.",
  },
  {
    week: 5,
    title: "Forms & Validation",
    theme: "Handle user input like a pro",
    hours: "10–12 hrs",
    color: "#F9C86B",
    topics: [
      {
        name: "Reactive Forms (the one you'll use at work)",
        detail: "FormGroup, FormControl, FormArray. FormBuilder service. Reactive forms are explicit, testable, and scalable. This is what production Angular uses.",
      },
      {
        name: "Built-in Validators",
        detail: "Validators.required, min, max, minLength, maxLength, pattern, email. Composing multiple validators. Displaying validation errors in templates.",
      },
      {
        name: "Custom Validators",
        detail: "Writing reusable validator functions. Cross-field validation (e.g., password === confirmPassword). Async validators for server-side checks.",
      },
      {
        name: "Template-driven Forms (know, don't master)",
        detail: "NgModel, ngForm. Simpler but less scalable. You'll encounter these in legacy code. Know how to read and maintain them.",
      },
      {
        name: "Form Submission & HTTP integration",
        detail: "Handling submit events, disabling submit button during loading, success/error feedback, resetting forms. End-to-end form → API → response flow.",
      },
    ],
    exercise: "Build a Registration Form with: name, email, password, confirmPassword fields. Validate all fields (including password match custom validator). On submit, call a mock API service, show a loading spinner, then success/error message.",
    keyInsight: "Reactive Forms feel verbose at first but they save you hours of debugging. The explicit control over state is worth the setup cost.",
  },
  {
    week: 6,
    title: "Production Patterns & Architecture",
    theme: "Write Angular the way teams do",
    hours: "10–12 hrs",
    color: "#F96B6B",
    topics: [
      {
        name: "Pipes — built-in & custom",
        detail: "DatePipe, CurrencyPipe, AsyncPipe (crucial for Observables in templates), JsonPipe for debugging. Writing your own pure and impure pipes.",
      },
      {
        name: "Angular Interceptors",
        detail: "HTTP interceptors for adding auth headers, logging, global error handling, loading state. The functional interceptor pattern. Every real app uses these.",
      },
      {
        name: "Error Handling Strategy",
        detail: "Global error handler (ErrorHandler), HTTP error interceptor, user-facing error messages. How to handle errors gracefully without crashing the app.",
      },
      {
        name: "Performance: OnPush Change Detection",
        detail: "How Angular's change detection works. ChangeDetectionStrategy.OnPush — when and why. Signal-based components auto-optimize this.",
      },
      {
        name: "Feature-based Folder Structure",
        detail: "Organizing by feature, not type. /features/auth/, /features/products/. Shared module/folder patterns. This is how real teams structure Angular apps.",
      },
      {
        name: "Testing basics (Angular-specific)",
        detail: "TestBed, ComponentFixture, HttpClientTestingModule. Writing one component test and one service test. Enough to understand the testing culture.",
      },
    ],
    exercise: "Refactor your Week 4–5 app: add an HTTP interceptor that logs every request and appends a fake Bearer token. Restructure folders to feature-based layout. Add OnPush to your list component. Write one test for your Todo service.",
    keyInsight: "Architecture decisions made in week 1 haunt you in month 6. Feature folders, OnPush, and interceptors aren't optional in real apps — they're table stakes.",
  },
];

const projects = [
  {
    level: "Beginner",
    num: 1,
    title: "Personal Finance Tracker",
    emoji: "💰",
    description:
      "A single-page app to track income and expense entries. Users can add transactions with a category, amount, and date. A summary panel shows total income, total expenses, and current balance updated in real time.",
    concepts: ["Signals for state", "@Input/@Output", "Reactive Forms", "ngClass for conditional styling", "Pipes (currency, date)", "Component decomposition"],
    why: "Forces you to think in components and manage shared state with signals — the core Angular loop.",
  },
  {
    level: "Beginner+",
    num: 2,
    title: "GitHub User Explorer",
    emoji: "🔍",
    description:
      "Search for any GitHub username and display their profile, repositories list (sorted by stars), and a language breakdown. Click a repo to see its details. Uses the public GitHub REST API.",
    concepts: ["HttpClient & real API calls", "Route params (/user/:username)", "RxJS switchMap for search debouncing", "Async pipe", "Error handling UI", "Loading states"],
    why: "Bridges theory to real-world API integration — the skill gap most developers struggle with.",
  },
  {
    level: "Intermediate",
    num: 3,
    title: "Kanban Task Board",
    emoji: "🗂️",
    description:
      "A Trello-style board with columns (To Do, In Progress, Done). Cards can be added, edited, deleted, and moved between columns. Data persists to localStorage via a service. Multiple boards supported via routing.",
    concepts: ["Complex state with Signals", "Drag and drop (CDK DragDrop)", "Feature-based folder structure", "Route guards", "Custom pipes", "Service abstraction layer"],
    why: "Real-world complexity with drag-and-drop, multi-route navigation, and persistent state — a portfolio-ready project.",
  },
  {
    level: "Intermediate+",
    num: 4,
    title: "Full Auth + Dashboard App",
    emoji: "🔐",
    description:
      "A multi-page app with login/register (JWT auth against a mock or real backend), a protected dashboard, user profile settings, and role-based access (admin vs user). Includes a data table with sorting, filtering, and pagination.",
    concepts: ["HTTP Interceptors (auth headers)", "Route Guards (canActivate)", "Reactive Forms with async validators", "OnPush change detection", "BehaviorSubject for auth state", "Role-based conditional rendering"],
    why: "This is the architecture every professional Angular app uses. Building it yourself makes job interviews feel easy.",
  },
  {
    level: "Advanced",
    num: 5,
    title: "Real-time Collaborative Notes App",
    emoji: "📝",
    description:
      "A Google Docs-lite app where multiple users can create, edit, and delete notes. Real-time updates via WebSockets (or Firebase). Notes support rich text (Quill or TipTap). Includes user presence indicators showing who's currently viewing a note.",
    concepts: ["WebSockets / Firebase integration", "RxJS advanced operators (merge, combineLatest)", "Optimistic UI updates", "NgRx or Signals store for complex state", "Component library integration", "Performance with large lists (virtual scrolling via CDK)"],
    why: "Pushes you into real-time systems, advanced state management, and performance territory — the stuff that separates senior developers.",
  },
];

export default function AngularStudyPlan() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeTab, setActiveTab] = useState("plan");
  const [expandedProject, setExpandedProject] = useState(null);

  const week = weeks[activeWeek];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      color: "#e8e8e8",
      padding: "0",
    }}>
      {/* Top bar */}
      <div style={{
        borderBottom: "1px solid #222",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "#0a0a0a",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "32px", height: "32px",
            background: "#DD0031",
            borderRadius: "6px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px", fontWeight: "900", color: "#fff",
          }}>A</div>
          <span style={{ fontSize: "13px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>Angular Mastery Plan · 6 Weeks</span>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          {["plan", "projects"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "6px 16px",
              background: activeTab === tab ? "#e8e8e8" : "transparent",
              color: activeTab === tab ? "#0a0a0a" : "#555",
              border: "1px solid",
              borderColor: activeTab === tab ? "#e8e8e8" : "#333",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "inherit",
            }}>{tab}</button>
          ))}
        </div>
      </div>

      {activeTab === "plan" ? (
        <div style={{ display: "flex", minHeight: "calc(100vh - 73px)" }}>
          {/* Week sidebar */}
          <div style={{
            width: "200px",
            borderRight: "1px solid #1a1a1a",
            padding: "24px 0",
            flexShrink: 0,
          }}>
            {weeks.map((w, i) => (
              <button key={i} onClick={() => setActiveWeek(i)} style={{
                width: "100%",
                padding: "14px 20px",
                background: activeWeek === i ? "#141414" : "transparent",
                border: "none",
                borderLeft: `3px solid ${activeWeek === i ? w.color : "transparent"}`,
                color: activeWeek === i ? w.color : "#444",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: "12px",
                letterSpacing: "0.06em",
                transition: "all 0.15s",
              }}>
                <div style={{ fontWeight: "700", marginBottom: "2px" }}>WEEK {w.week}</div>
                <div style={{ fontSize: "10px", opacity: 0.7, lineHeight: 1.3 }}>{w.title}</div>
              </button>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "32px 40px", maxWidth: "860px", overflowY: "auto" }}>
            {/* Week header */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{
                  background: week.color,
                  color: "#0a0a0a",
                  fontSize: "11px",
                  fontWeight: "700",
                  padding: "3px 10px",
                  borderRadius: "2px",
                  letterSpacing: "0.1em",
                }}>WEEK {week.week}</span>
                <span style={{ color: "#444", fontSize: "12px" }}>{week.hours}</span>
              </div>
              <h1 style={{ fontSize: "26px", fontWeight: "700", margin: "0 0 6px", color: "#f0f0f0", letterSpacing: "-0.5px" }}>{week.title}</h1>
              <p style={{ color: "#555", fontSize: "13px", margin: 0, fontStyle: "italic" }}>{week.theme}</p>
            </div>

            {/* Topics */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontSize: "11px", color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>Core Topics</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {week.topics.map((topic, i) => (
                  <div key={i} style={{
                    background: "#111",
                    border: "1px solid #1c1c1c",
                    borderRadius: "6px",
                    padding: "14px 16px",
                  }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: week.color, fontSize: "11px", fontWeight: "700", minWidth: "20px", paddingTop: "1px" }}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#e8e8e8", marginBottom: "4px" }}>{topic.name}</div>
                        <div style={{ fontSize: "12px", color: "#555", lineHeight: "1.6" }}>{topic.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly exercise */}
            <div style={{
              background: "#0e1a0e",
              border: `1px solid ${week.color}22`,
              borderLeft: `3px solid ${week.color}`,
              borderRadius: "6px",
              padding: "18px 20px",
              marginBottom: "20px",
            }}>
              <div style={{ fontSize: "11px", color: week.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>Weekly Build Exercise</div>
              <p style={{ fontSize: "13px", color: "#aaa", margin: 0, lineHeight: "1.7" }}>{week.exercise}</p>
            </div>

            {/* Key insight */}
            <div style={{
              background: "#13100a",
              border: "1px solid #2a2200",
              borderRadius: "6px",
              padding: "16px 20px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "16px", flexShrink: 0 }}>💡</span>
              <div>
                <div style={{ fontSize: "11px", color: "#c8a020", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Key Insight</div>
                <p style={{ fontSize: "12px", color: "#7a6a40", margin: 0, lineHeight: "1.7" }}>{week.keyInsight}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Projects tab */
        <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#f0f0f0", margin: "0 0 8px" }}>5 Projects · Beginner → Advanced</h2>
            <p style={{ color: "#444", fontSize: "13px", margin: 0 }}>Build these after your 6-week plan. Each one stretches you further. Don't skip — difficulty is the point.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {projects.map((p, i) => {
              const isOpen = expandedProject === i;
              const levelColors = { "Beginner": "#6BF9C8", "Beginner+": "#C8F96B", "Intermediate": "#6BC8F9", "Intermediate+": "#F9C86B", "Advanced": "#F96B6B" };
              const c = levelColors[p.level];

              return (
                <div key={i} style={{
                  background: "#0f0f0f",
                  border: `1px solid ${isOpen ? c + "44" : "#1c1c1c"}`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}>
                  <button onClick={() => setExpandedProject(isOpen ? null : i)} style={{
                    width: "100%",
                    padding: "18px 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}>
                    <span style={{ fontSize: "22px", flexShrink: 0 }}>{p.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                        <span style={{
                          fontSize: "10px", fontWeight: "700",
                          color: c, background: c + "15",
                          padding: "2px 8px", borderRadius: "2px",
                          letterSpacing: "0.08em",
                        }}>{p.level.toUpperCase()}</span>
                        <span style={{ fontSize: "10px", color: "#333" }}>PROJECT {p.num}</span>
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#e8e8e8" }}>{p.title}</div>
                    </div>
                    <span style={{ color: "#333", fontSize: "16px", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 20px 20px", borderTop: "1px solid #1a1a1a" }}>
                      <p style={{ fontSize: "13px", color: "#777", lineHeight: "1.75", margin: "16px 0" }}>{p.description}</p>

                      <div style={{ marginBottom: "14px" }}>
                        <div style={{ fontSize: "11px", color: "#333", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Concepts Reinforced</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {p.concepts.map((concept, j) => (
                            <span key={j} style={{
                              fontSize: "11px",
                              color: "#666",
                              background: "#161616",
                              border: "1px solid #222",
                              borderRadius: "3px",
                              padding: "3px 9px",
                            }}>{concept}</span>
                          ))}
                        </div>
                      </div>

                      <div style={{
                        background: "#0a0a0a",
                        borderLeft: `2px solid ${c}`,
                        padding: "10px 14px",
                        borderRadius: "0 4px 4px 0",
                      }}>
                        <span style={{ fontSize: "11px", color: c, letterSpacing: "0.08em", textTransform: "uppercase" }}>Why this project · </span>
                        <span style={{ fontSize: "12px", color: "#555" }}>{p.why}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
