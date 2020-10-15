export interface Response {
  data: Data;
}

export interface Data {
  student: Student;
}

export interface Student {
  id: number;
  fullName: string;
  code: string;
  imageUrl: string;
  classRoomInfo: ClassRoomInfo;
  semesterInfo: SemesterInfo;
  todayClock: StudyStatList[];
  studyStatList: StudyStatList[];
}

export interface ClassRoomInfo {
  id: number;
  fullName: string;
}

export interface SemesterInfo {
  id: number;
  name: string;
  year: number;
  clockInStat: ClockInStat;
}

export interface ClockInStat {
  clockStat: number;
  absentStat: number;
  lateStat: number;
  leaveStat: number;
  earlyStat: number;
  holidayStat: number;
  studyStat: number;
}

export interface StudyStatList {
  date: Date;
  type: null | string;
  clockIn: Date | null;
  clockOut: Date | null;
  faceIn: null | string;
  faceOut: null | string;
  studyStat: number;
  holidayStat: number;
  clockStat: number;
  lateStat: number;
  absentStat: number;
  leaveStat: number;
  earlyStat: number;
  creator: null | string;
}

export const {
  data: { student: students },
}: Response = require("./clockin.json");
