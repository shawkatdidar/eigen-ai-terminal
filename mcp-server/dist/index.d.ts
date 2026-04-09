#!/usr/bin/env node
/**
 * EIGEN AI TERMINAL — MCP SERVER v1.0
 *
 * The data layer for AI agents. Serves structured intelligence
 * about the AI landscape. The agent does the filtering —
 * we provide clean, well-organized data with rich metadata.
 *
 * 11 tools: today, about, ripple, trends, blocked, speed,
 *           predictions, search, read, changes, whats_new
 *
 * Design principles:
 *   - The agent is an LLM — it does semantic matching, not us
 *   - We return MORE data with good metadata, agent narrows down
 *   - No internal IDs or abstract terminology in responses
 *   - Extensible: new data types (tools, tips, workflows) flow
 *     through the same tools via the `type` field on items
 */
export {};
