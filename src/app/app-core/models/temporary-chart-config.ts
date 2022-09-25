import { labels } from './../../mock-api/apps/notes/data';

export const TEMPORARY_CHART_CONFIG: TemporaryChart = {
    labels: [],
    series: [],
    department: '',
};

export interface TemporaryChart {
    labels: string[];
    series: number[];
    department: string;
}
