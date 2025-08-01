import { Application } from 'express';
import authRoute from './auth';
import gradeRoute from './grade';
import subjectRoute from './subject';
import courseRoute from './course';
import instuctorRoute from './instructor';
import uploadRoute from './upload';

export const useRoute = (app: Application) => {
  app.use('/api/auth', authRoute);
  app.use('/api/grade', gradeRoute);
  app.use('/api/subject', subjectRoute);
  app.use('/api/course', courseRoute);
  app.use('/api/instructor', instuctorRoute);
  app.use('/api/upload', uploadRoute);
};
