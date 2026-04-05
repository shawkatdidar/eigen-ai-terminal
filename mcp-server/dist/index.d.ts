#!/usr/bin/env node
/**
 * AI RADAR MCP SERVER
 *
 * This is the "plug" that lets any AI agent query the radar.
 * It speaks MCP (Model Context Protocol) — the standard way agents
 * connect to external tools.
 *
 * When an agent calls one of our tools, this server:
 *   1. Reads the radar data (from a URL or local file)
 *   2. Processes the query
 *   3. Returns structured results the agent can use
 *
 * Install: npx ai-radar-mcp (runs this server)
 * Or add to Claude Code config as an MCP server.
 */
export {};
