import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // Standard Letter Size
  const { width, height } = page.getSize();
  
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Color palette
  const primaryColor = rgb(0.04, 0.09, 0.22); // Deep navy
  const accentColor = rgb(0.02, 0.55, 0.72);  // Cyan
  const darkGray = rgb(0.2, 0.25, 0.3);
  const lightGray = rgb(0.5, 0.55, 0.6);

  let y = height - 45;

  // Header - Name
  page.drawText('VASAVI KADARI', {
    x: 50,
    y: y,
    size: 24,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;

  // Subtitle
  page.drawText('B.Tech Computer Science Student | Aspiring Data Analyst | Data Science Enthusiast', {
    x: 50,
    y: y,
    size: 11,
    font: fontOblique,
    color: accentColor,
  });

  y -= 16;

  // Contact Row
  const contactText = 'Hyderabad, India  |  vasavireddy2006@gmail.com  |  linkedin.com/in/vasavi-kadari2006  |  github.com/vasavireddy332';
  page.drawText(contactText, {
    x: 50,
    y: y,
    size: 9,
    font: fontRegular,
    color: darkGray,
  });

  y -= 15;

  // Horizontal divider
  page.drawLine({
    start: { x: 50, y: y },
    end: { x: width - 50, y: y },
    thickness: 1.5,
    color: accentColor,
  });

  y -= 25;

  // Section helper
  const drawSectionHeading = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 50,
      y: y,
      size: 13,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: 50, y: y },
      end: { x: width - 50, y: y },
      thickness: 0.75,
      color: lightGray,
    });
    y -= 16;
  };

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  const summary = 'Computer Science student passionate about transforming data into meaningful insights and building practical technology solutions with Python, SQL, Power BI and REST APIs. Strong analytical skillset with hands-on experience in data modeling, exploratory analysis, and automated API development.';
  
  // Wrap summary text simple implementation
  page.drawText(summary.substring(0, 115), { x: 50, y: y, size: 9.5, font: fontRegular, color: darkGray });
  y -= 14;
  page.drawText(summary.substring(115, 230), { x: 50, y: y, size: 9.5, font: fontRegular, color: darkGray });
  y -= 14;
  page.drawText(summary.substring(230), { x: 50, y: y, size: 9.5, font: fontRegular, color: darkGray });
  y -= 22;

  // 2. EDUCATION
  drawSectionHeading('Education');
  page.drawText('B.Tech — Computer Science Engineering', { x: 50, y: y, size: 11, font: fontBold, color: primaryColor });
  page.drawText('2023 – 2027', { x: width - 110, y: y, size: 10, font: fontBold, color: accentColor });
  y -= 14;
  page.drawText('Sri Indu Institute of Engineering & Technology, Hyderabad, Telangana', { x: 50, y: y, size: 9.5, font: fontOblique, color: darkGray });
  page.drawText('CGPA: 8.0', { x: width - 110, y: y, size: 9.5, font: fontBold, color: darkGray });
  y -= 22;

  // 3. TECHNICAL SKILLS
  drawSectionHeading('Technical Arsenal');
  const skillGroups = [
    { cat: 'Programming & Web:', skills: 'Python, C, FastAPI, REST APIs, SQLAlchemy, Uvicorn' },
    { cat: 'Data Analytics & BI:', skills: 'SQL (T-SQL / MySQL), Pandas, NumPy, Power BI, DAX, Power Query, Excel' },
    { cat: 'Databases & Tools:', skills: 'MySQL, SQL Server, Git, GitHub, PyMySQL, Pydantic' },
    { cat: 'Analytical Competencies:', skills: 'Data Modeling, Trend Analysis, Customer Segmentation, Data Storytelling' }
  ];

  for (const item of skillGroups) {
    page.drawText(item.cat, { x: 50, y: y, size: 9.5, font: fontBold, color: primaryColor });
    page.drawText(item.skills, { x: 180, y: y, size: 9.5, font: fontRegular, color: darkGray });
    y -= 15;
  }
  y -= 10;

  // 4. FEATURED PROJECTS
  drawSectionHeading('Featured Projects');

  const projects = [
    {
      title: 'Global E-Commerce Sales Analysis',
      tech: 'SQL Server | T-SQL | Excel',
      bullets: [
        'Executed SQL analysis on global e-commerce dataset to evaluate revenue patterns across countries & categories.',
        'Applied SQL window functions, CTEs, and aggregations for revenue ranking, trend identification & outlier detection.'
      ]
    },
    {
      title: 'Online Retail Sales Analysis',
      tech: 'SQL | Database Design | Aggregations',
      bullets: [
        'Designed normalized relational schema for Customers, Products, and Orders to analyze customer purchasing behavior.',
        'Built SQL queries using joins and subqueries to calculate Average Order Value (AOV) and customer repeat rates.'
      ]
    },
    {
      title: 'Customer Trends Data Analysis',
      tech: 'SQL | Python | Power BI | DAX',
      bullets: [
        'Created an end-to-end data pipeline combining SQL data extraction, Pandas preprocessing, and Power BI dashboards.',
        'Formulated custom DAX measures for real-time KPI tracking, customer segmentation, and executive summary reporting.'
      ]
    },
    {
      title: 'FastAPI E-Commerce CRUD API',
      tech: 'Python | FastAPI | SQLAlchemy | MySQL',
      bullets: [
        'Developed high-performance RESTful API microservices for product catalog management using FastAPI & Pydantic.',
        'Integrated SQLAlchemy ORM with MySQL database for secure parameter validation and robust CRUD workflows.'
      ]
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.title, { x: 50, y: y, size: 10.5, font: fontBold, color: primaryColor });
    page.drawText(proj.tech, { x: width - 210, y: y, size: 8.5, font: fontOblique, color: accentColor });
    y -= 14;
    for (const b of proj.bullets) {
      page.drawText(`•  ${b}`, { x: 60, y: y, size: 9, font: fontRegular, color: darkGray });
      y -= 13;
    }
    y -= 4;
  }

  y -= 10;

  // 5. EXPERIENCE & CERTIFICATIONS
  drawSectionHeading('Practical Experience & Certifications');

  page.drawText('GenAI-Powered Data Analytics Job Simulation — Forage', { x: 50, y: y, size: 9.5, font: fontBold, color: primaryColor });
  y -= 13;
  page.drawText('• Completed data simulation involving financial datasets, validation of AI insights & reporting.', { x: 60, y: y, size: 9, font: fontRegular, color: darkGray });
  y -= 18;

  page.drawText('Certifications:', { x: 50, y: y, size: 9.5, font: fontBold, color: primaryColor });
  y -= 13;
  page.drawText('• SQL (Intermediate) - HackerRank  |  Python for Data Analysis - Simplilearn', { x: 60, y: y, size: 9, font: fontRegular, color: darkGray });
  y -= 13;
  page.drawText('• Data Analytics with Artificial Intelligence - SQL School Institute  |  Power BI Workshop', { x: 60, y: y, size: 9, font: fontRegular, color: darkGray });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfBytes);
  console.log('Resume PDF generated successfully at public/resume.pdf');
}

createResumePdf().catch(console.error);
