import {ProcessingDateService} from "./processing-date.service";
import {ProcessingDate} from "./processing-date.model";
import {TestBed} from "@angular/core/testing";
import {provideHttpClient} from "@angular/common/http";

fdescribe('ProcessingDateService', () => {
  let processingDateService: ProcessingDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ProcessingDateService,provideHttpClient()]});
    processingDateService = TestBed.inject(ProcessingDateService);
  })

  describe('processingDateToString()', () => {


    it('returns - OK - processingDate like 2024.10.01 ', () => {
      let processingDate = {day:1,month:10,year:2024} as ProcessingDate
      expect(processingDateService.processingDateToString(processingDate)
      ).toEqual("2024.10.01");
    });

    it('returns processingDate in string format', () => {
      let processingDate = {day:12,month:10,year:2024} as ProcessingDate
      expect(processingDateService.processingDateToString(processingDate)
      ).toEqual("2024.10.12");
    })

  })
})
