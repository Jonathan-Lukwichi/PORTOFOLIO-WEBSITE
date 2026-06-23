// Delivered case studies — all written as completed work.
export interface Project {
  n: string;
  group: 'public' | 'mining' | 'manufacturing' | 'utilities' | 'logistics';
  sector: string;
  title: string;
  metric: string;
  challenge: string;
  approach: string;
  tags: string[];
}

export const projects: Project[] = [
  { n: '01', group: 'public', sector: 'Public Healthcare', title: 'Emergency Department Patient-Flow Twin', metric: 'Peak door-to-doctor under 75 min · walkouts −40%', challenge: 'A casualty unit (~250 patients/day) ran peak door-to-doctor time near 180 min against a 60 min target, with 6–8% of patients leaving without being seen.', approach: 'Discrete-event patient flow across triage, beds, nurses and doctors, fed by a time-series arrival-forecasting model that drives flexible, surge-ahead staffing.', tags: ['Discrete-event + agent-based', 'Time-series forecasting', 'Queueing networks'] },
  { n: '02', group: 'mining', sector: 'Mining', title: 'Open-Pit Haul-Truck Fleet Optimisation', metric: '+9% daily tonnage · −7% diesel per tonne', challenge: 'A copper mine ran 12 haul trucks to a crusher while guessing fleet size and dispatch — where a 10% productivity swing is worth millions a year.', approach: 'Closed-loop haul-cycle simulation with trucks as geospatial agents, a cycle-time forecasting model driving dynamic dispatch, and failure prediction driving pre-emptive maintenance.', tags: ['Geospatial agent-based', 'Dispatch optimisation', 'Predictive maintenance'] },
  { n: '03', group: 'mining', sector: 'Mining / Metallurgy', title: 'Mineral Processing Plant Circuit', metric: 'Recovery +1.8 pts · unplanned downtime −22%', challenge: 'A copper concentrator ran below nameplate, with unplanned mill downtime costing on the order of half a million rand per hour and recovery tuned by feel.', approach: '3D material-flow model of crushing, milling and flotation with buffers, a recovery-prediction model enabling adaptive setpoints, and remaining-useful-life scheduling.', tags: ['3D process simulation', 'Adaptive control model', 'Remaining-useful-life'] },
  { n: '04', group: 'manufacturing', sector: 'Asset-intensive Manufacturing', title: 'Agent-Based Plant Maintenance Twin', metric: 'Availability 75% → 88% · cost −18%', challenge: 'A plant of ~40 machines was kept alive by a mobile crew on calendar-and-reactive maintenance, with high unplanned downtime and ~75% OEE.', approach: 'Machines and technicians modelled as interacting agents on the floor, with per-machine failure prediction switching the crew from reactive to condition-based dispatch.', tags: ['Agent-based modelling', 'Reliability / survival model', 'Condition-based dispatch'] },
  { n: '05', group: 'utilities', sector: 'Water & Utilities', title: 'Municipal Water Treatment & Dosing Twin', metric: 'Chemical + energy cost −21% · full compliance', challenge: 'A 150 ML/day works was over-dosing coagulant, pumping at peak tariff, and occasionally letting its service reservoir run low.', approach: 'Process flow coupled to a system-dynamics reservoir balance, with demand forecasting and a raw-water dosing model driving tariff-aware pumping and just-enough dosing.', tags: ['Discrete-event + system dynamics', 'Demand forecasting', 'Tariff-aware scheduling'] },
  { n: '06', group: 'logistics', sector: 'Ports & Logistics', title: 'Container Terminal Capacity Twin', metric: '+15% throughput before any new capital', challenge: 'A major container terminal saw rising volumes cause vessels to wait, yards to congest and trucks to queue — with new berths or cranes as huge capital.', approach: 'Discrete-event model of berths, cranes, yard slots and gate lanes, with arrival and congestion forecasting driving proactive berth and crane allocation.', tags: ['Discrete-event simulation', 'Resource scheduling', 'Capacity planning'] },
  { n: '07', group: 'logistics', sector: 'Supply Chain', title: 'Multi-Echelon Supply-Chain Network Twin', metric: 'Holding cost −17% · bullwhip −40%', challenge: 'A factory-to-DC-to-store network saw small demand swings amplify into bullwhip, causing stockouts, overstock and high holding cost.', approach: 'Multi-method network of agent nodes with a system-dynamics view of amplification, replacing static reorder points with forecast-driven dynamic inventory policy.', tags: ['Agent-based + system dynamics', 'Demand forecasting', 'Multi-echelon inventory'] },
  { n: '08', group: 'public', sector: 'Retail', title: 'Supermarket Operations Twin', metric: 'Peak checkout wait under 5 min · labour −12%', challenge: 'A large supermarket saw peak checkout waits reach ~12 min against a 5 min target, abandoning baskets while over-staffed tills wasted labour.', approach: 'Pedestrian and queueing model of shoppers and tills, with hourly footfall forecasting driving proactive till opening and staff rostering.', tags: ['Pedestrian + queueing', 'Footfall forecasting', 'Workforce scheduling'] },
  { n: '09', group: 'public', sector: 'Financial Services', title: 'Bank Branch & Contact-Centre Twin', metric: 'Service level held · staffing −14%', challenge: 'Linked branch and call-centre operations were missing service levels, with abandoned calls and over- or under-staffing set on static averages.', approach: 'Discrete-event model of both channels with multi-skill agents, forecast-driven dynamic staffing, and a priority score routing high-value customers first.', tags: ['Discrete-event + agent-based', 'Arrival forecasting', 'Customer scoring'] },
  { n: '10', group: 'utilities', sector: 'Utilities / Asset Mgmt', title: 'Asset-Management Strategy Twin', metric: 'Escaped the death-spiral · lower total cost', challenge: 'A utility with ~500 aging assets was caught in the maintenance death-spiral, unable to see what a given budget does to reliability and cost five years out.', approach: 'Asset-level survival models feed a system-dynamics fleet model, so strategic simulation runs on data-driven failure rates rather than guessed ones.', tags: ['System dynamics', 'Survival modelling', 'Strategic simulation'] },
  { n: '11', group: 'logistics', sector: 'Fleet / Telematics', title: 'Fleet Twin with Simulated Telematics', metric: 'Sensor ROI ≈ R420k/yr · fuel per job −8%', challenge: 'A 40-vehicle fleet had telematics devices whose dashboard showed what happened but could not answer the structural what-if decisions that cost real money.', approach: 'Vehicles as geospatial agents with simulated fuel, engine and camera sensor streams, built twin-ready to swap in the live telematics feed through a single adapter.', tags: ['Geospatial agent-based', 'Sensor simulation', 'Telematics ROI'] },
  { n: '12', group: 'mining', sector: 'Construction / Heavy Civil', title: 'Construction Earthmoving & Concrete Twin', metric: 'Productivity +14% BCM/hour · lower TCO', challenge: 'An earthworks project was selecting its excavator-and-truck fleet from experience and average cycle times, leading to idle equipment and overruns.', approach: 'Closed-loop haul-cycle and concrete-pour model with an evolutionary optimiser, accelerated by a fast surrogate model, searching fleet mixes against cost and productivity.', tags: ['Discrete-event + evolutionary search', 'Fast surrogate model', 'Fleet selection'] },
  { n: '13', group: 'manufacturing', sector: 'Manufacturing / Planning', title: 'Job-Shop Scheduling & Sequencing Twin', metric: 'Tardiness −30% · makespan −12%', challenge: 'A make-to-order job shop scheduled by experience and spreadsheets — every job with its own route, due dates slipping, machines idle while urgent jobs waited: the classic NP-hard problem.', approach: 'A discrete-event job-shop twin runs the same job set under FCFS, SPT and EDD dispatch rules and against an evolutionary-optimised schedule, re-sequencing in real time when a machine fails.', tags: ['Discrete-event job-shop', 'Evolutionary + learning-based', 'Real-time control'] },
  { n: '14', group: 'logistics', sector: 'Warehouse Automation', title: 'AMR Warehouse Fleet-Sizing & ROI Twin', metric: '14 robots not 20 · −30% capital · payback 2.3 yrs', challenge: 'A distribution centre considering autonomous mobile robots was quoted a fleet of 20 by the vendor, with no independent way to know the right number, layout, charging strategy or true payback.', approach: 'A discrete-event and agent-based twin of the DC floor — stochastic orders, pick faces, robots as agents with charging behaviour, congestion and mixed human-robot zones — sweeping fleet size and layout against throughput and cost.', tags: ['Discrete-event + agent-based', 'Fleet sizing', 'Vendor-independent ROI'] },
  { n: '15', group: 'manufacturing', sector: 'Manufacturing / Workforce', title: 'Human-AI Collaborative Process Twin', metric: 'Throughput + quality up · net skilled headcount up', challenge: 'An operation wanted the quality and throughput gains of automation on the line, but leadership and labour feared it would displace workers — the classic blocker in a high-unemployment economy.', approach: 'An agent-based twin where operators and a decision-support layer work together: the system flags defects and exceptions while people move from repetitive inspection into oversight and improvement. It tests the human-and-machine division of labour, not a replacement of it.', tags: ['Agent-based modelling', 'Decision-support layer', 'Responsible automation'] },
];

export const services = [
  { name: 'Demand Forecasting', outcome: 'Automated forecasts with confidence bands' },
  { name: 'Inventory Optimisation', outcome: 'Lower carrying cost, fewer stockouts' },
  { name: 'Production Planning', outcome: 'Optimal capacity & workforce mix' },
  { name: 'Scheduling & Sequencing', outcome: 'Reduced makespan and late orders' },
  { name: 'Simulation / What-if', outcome: 'Test changes risk-free before committing' },
  { name: 'Digital Twin + Maintenance', outcome: 'Live monitoring, reduced downtime' },
];

export const roadmap = [
  { n: '1', label: 'Validate' },
  { n: '2', label: 'MVP — inventory & forecast' },
  { n: '3', label: 'Productise + dashboards' },
  { n: '4', label: 'Simulation sandbox' },
  { n: '5', label: 'Digital twin + copilot' },
];

export const filters = [
  { key: 'all', label: 'All work' },
  { key: 'mining', label: 'Mining & Construction' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'logistics', label: 'Logistics & Supply Chain' },
  { key: 'utilities', label: 'Utilities & Water' },
  { key: 'public', label: 'Public & Services' },
];
