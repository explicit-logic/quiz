'use client';

// Modules
import { memo } from 'react';

// Hooks
import { useQuestionRender } from './hooks/useQuestionRender';

// Types
import type { ViewProps } from './QuestionForm.types';

// Components
import Button, { VARIANTS } from '@/components/atoms/Button';
import RightArrow from '@/components/atoms/RightArrow';

function QuestionFormView(props: ViewProps) {
  const { formik, goBack, last, questions, tokens } = props;

  const component = useQuestionRender(formik, { questions, tokens });
  const buttonText = last ? 'Finish' : 'Next Question';

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 lg:mb-16">{component}</div>

      {/* Action Buttons */}
      <div className="flex flex-col mb-8 lg:mb-16 justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button
          type="button"
          variant={VARIANTS.alternative}
          onClick={goBack}
        >
            Go Back
        </Button>
        <Button
          type="submit"
          disabled={(!formik.isValid || !formik.dirty)}
          variant={VARIANTS.default}
        >
          {buttonText}
          {!last && <RightArrow className="ml-2 -mr-1 w-5 h-5" />}
        </Button>
      </div>
    </form>
  );
}

export default memo(QuestionFormView);
