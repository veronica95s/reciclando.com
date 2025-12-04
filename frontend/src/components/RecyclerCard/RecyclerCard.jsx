import Badge from '../ui/Badge/Badge';
import { MapPin, Phone, Mail, Clock4 } from 'lucide-react';
import styles from './RecyclerCard.module.css';

export default function RecyclerCard(props) {
  const {
    imageSrc = 'https://placehold.co/80',
    userId,
    firstName,
    lastName,
    city,
    state,
    acceptedMaterials,
  } = props;

  return (
    <div className='col'>
      <div className={styles['recycler-card']} style={{ maxWidth: '450px' }}>
        <div
          className={`d-flex align-items-start gap-3 ${styles['card-info']}`}
        >
          <div className={styles['img-profile']}>
            <img src={imageSrc} alt='' />
          </div>
          <div className='flex-fill'>
            <h5>
              {firstName} {lastName}
            </h5>
            <p className='d-flex align-items-center gap-1 mb-3'>
              <MapPin size={20} />
              <small className='text-body-secondary'>
                {city}, {state}
              </small>
            </p>
            <div className='mb-3 d-flex gap-2'>
              {acceptedMaterials.map((material, idx) => (
                <Badge key={idx} value={material} />
              ))}
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center gap-2'>
          <button
            className={`btn mt-3 ${styles['btn-secondary']}`}
            style={{ width: '100%', textAlign: 'center' }}
            data-bs-toggle='modal'
            data-bs-target={`#exampleModal${userId}`}
          >
            Contatar
          </button>
        </div>

        <div
          class='modal fade'
          id={`exampleModal${userId}`}
          tabindex='-1'
          aria-labelledby={`exampleModal${userId}`}
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id={`exampleModal${userId}`}>
                  Informações de contato
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <div className='d-flex gap-3 mb-3'>
                  <div className={`${styles['icon-wrapper']}`}>
                    <Phone color='#166534' />
                  </div>
                  <div>
                    <small className={styles.small}>Telefone</small>
                    <a href='tel:' className={styles['contact-data']}>
                      (11) 1111-2222
                    </a>
                  </div>
                </div>
                <div className='d-flex gap-3 mb-3'>
                  <div className={`${styles['icon-wrapper']}`}>
                    <Mail color='#166534' />
                  </div>
                  <div>
                    <small className={styles.small}>E-mail</small>
                    <a href='mailto:' className={styles['contact-data']}>
                      contato@email.com
                    </a>
                  </div>
                </div>
                <div className='d-flex gap-3 mb-3'>
                  <div className={`${styles['icon-wrapper']}`}>
                    <Clock4 color='#166534' />
                  </div>
                  <div>
                    <small className={styles.small}>
                      Horário de funcionamento
                    </small>
                    <p className={styles['contact-data']}>
                      Seg a Sex, 8hr às 18hrs
                    </p>
                  </div>
                </div>
              </div>
              <div class='modal-footer'>
                <a
                  href={`https://web.whatsapp.com/send?phone=`}
                  class='btn btn-success d-flex align-items-center gap-2'
                >
                  <svg
                    className='w-6 h-6 text-gray-800 dark:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z'
                      clipRule='evenodd'
                    />
                    <path
                      fill='currentColor'
                      d='M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z'
                    />
                  </svg>
                  Contatar
                </a>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
