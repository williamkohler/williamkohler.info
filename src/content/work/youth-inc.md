---
company: Youth Inc
location: Boston, MA
start: 2025-08-01
end: null
order: 1
roles:
  - title: Senior Software Engineer
    start: 2025-08-01
    end: null
    highlights:
      - Own the order-fulfillment integration layer end to end — 100% of company order volume, roughly 6,100 orders a year — routing across ShipStation (REST/webhooks), LINX (SOAP), and FulfillEngine with idempotent submission and reconciliation, plus the shipment-tracking pipeline that notifies customers on ship.
      - "Led the platform's AWS migration: containerized the Elixir/Phoenix app, stood up a full parallel staging environment on ECS and RDS managed by Terraform with cost controls, and cut traffic over to it. Built a CloudWatch reporter on Oban queue depth to drive ECS auto-scaling under queue pressure."
      - Built the company's observability stack from scratch — structured Slack error alerting with rate-limited grouped threads, PII redaction in production logs, and CloudWatch metrics — surfacing a class of integration failures that had been failing silently.
      - Closed a critical disaster-recovery gap with automated production database backups, taking recovery point objective from unbounded to a fixed window, plus prod-to-local restore tooling that is now the team's standard debugging workflow.
      - Bootstrapped and own the Phoenix LiveView commerce platform used daily by operations — inventory ingestion with dry-run diffs, SKU launch automation, per-decorator fulfillment dashboards, demand forecasting with at-risk SKU detection, and per-SKU margin reporting — replacing SSH-into-production console workflows with self-serve tooling.
      - "Designed an automated hold/release system for embroidery orders: orders missing production files are held back from decorators, operations is alerted via Slack, and orders auto-release on file upload — eliminating a class of silently failed orders and the manual resend work around them."
---
