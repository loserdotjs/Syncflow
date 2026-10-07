# SyncFlow

Real-time collaborative project management, built with React, NestJS and PostgreSQL.

> Work in progress — built as a learning project, step by step.

**Demo:** _coming soon_

## Tech stack

| Layer    | Tech                                                        |
| -------- | ----------------------------------------------------------- |
| Frontend | React, TypeScript, Vite, React Router                       |
| Backend  | NestJS, TypeScript, PostgreSQL, Prisma                      |
| Tooling  | Vitest, oxlint, Prettier                                    |

## Features

**MVP**
- [ ] Authentication (JWT + refresh token)
- [ ] User profiles
- [ ] Projects: create, edit, delete
- [ ] Project members with roles (owner / editor / viewer)
- [ ] Tickets: title, description, priority level
- [ ] Kanban board with drag & drop
- [ ] Deployment

**Next**
- [ ] Real-time board updates (WebSocket)
- [ ] Ticket comments
- [ ] Attachments (images / videos)
- [ ] Profile pictures
- [ ] Docker Compose + CI

## Project structure

```
backend/    NestJS API
frontend/   React app
```

## Getting started

_To be completed once the API and the frontend are connected._

## What I'm learning

Coming from Angular, I'm using this project to learn React and NestJS. 
I'll document key decisions and trade-offs here as I go.